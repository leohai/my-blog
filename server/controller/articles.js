
const Articles = require('../models/articles')
const Tags = require('../models/tags')
const SuccessModel = require('../util/succesModel')
class ArticlesController{
    async create(ctx){
        ctx.verifyParams({
        title:{type:'string',required:true},
        content:{type:'string',required:true},
        tags:{type:'array',itemType:'string',required:true},
        })
        const {tags} = ctx.request.body
        const owner=ctx.state.user._id
        let res=await new Articles({...ctx.request.body,owner}).save()
        if(!res) ctx.trhow(404,"创建文章失败")
        for(const item of tags ){
            await Tags.findByIdAndUpdate(item,{$inc:{articlesCount:1}})
        }
        ctx.body=SuccessModel()
    }
    async find(ctx){
        //onlyTitle 是用来排除content返回
        let {q,page=0,perPage=10,onlyTitle,tag}=ctx.query
        perPage=Math.max(perPage,1)
        page=Math.max((page-1)*perPage,0)
        q=new RegExp(q)
        let data=""
        if(onlyTitle){
            data=await Articles.find().sort({_id:-1}).select("-content")
            .limit(perPage)
            .skip(page)
            if(!data) ctx.throw(404,"查询出错")
            let totalCount = await Articles.count()
            ctx.body={
                code:0,
                data,
                totalCount
            }
        }else{
            let obj=""
            if(tag){
               obj={title:q,tags:tag}
            }else{ 
                obj={$or:[{title:q},{content:q}]}
            }
            data=await Articles.find(obj).sort({_id:-1}).populate("tags")
            .limit(perPage)
            .skip(page)
            if(!data) ctx.throw(404,"查询出错")
            let totalPage = Math.ceil(await Articles.count({$or:[{title:q},{content:q}]})/perPage)
            ctx.body={
                code:0,
                data,
                totalPage
            }
        }
        
    }
    
    async findById(ctx){
        const {id}=ctx.params
        
        const data=await Articles.findById(id).populate("tags")
        if(!data) ctx.trhow(404,"查询出错")
        ctx.body=SuccessModel(data)
    }
   
    async update(ctx){
        const {title,content,tags}=ctx.request.body
        const {id}=ctx.params
        ctx.verifyParams({
            title:{type:'string',uerequired:true},
            content:{type:'string',required:true},
            tags:{type: 'array', itemType: 'string' ,required:true}
        })
        let res=await Articles.findByIdAndUpdate(id,
           {title,content,tags},{new:true})
        if(!res) ctx.trhow(404,"更新文章失败")
        ctx.body=SuccessModel()

    }
    async remove(ctx){
        const {id}=ctx.params
        let res=await Articles.findByIdAndRemove(id)
        if(!res) ctx.trhow(404,"删除文章失败")
        ctx.body=SuccessModel()
    }
    async checkArticlesExist(ctx, next) {
        const articles = await Articles.findById(ctx.params.id);
        if (!articles) { ctx.throw(404, '文章不存在'); }
        ctx.state.articles = articles;
        await next();
      }
    async checkPermission(ctx,next){
        if(ctx.state.articles.owner!=ctx.state.user._id){
            ctx.throw(404, '没有此文章权限');
        }
        await next()
    }
    
}
module.exports=new ArticlesController()
