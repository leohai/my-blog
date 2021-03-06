import React,{memo}  from 'react'
import { Anchor } from 'antd'
const { Link } = Anchor

// 根据 article 来生成锚点列表
function getAnchorList(str) {
    if(!str) return[]
    //str <h1 id="一级标题">一级标题</h1>
  const pattern = /<(h[1-6])[\s\S]+?(?=<\/\1>)/g
  let list = []
  function pushItem(arr, item) {
    const len = arr.length
    const matchItem = arr[len - 1]
    if (matchItem && matchItem.tag !== item.tag) {
      pushItem(matchItem.children, item)
    } else {
      arr.push(item)
    }
  }
  str.replace(pattern, ($0, $1) => {
    const title = $0.replace(/.*?>/, '')
    let startIndex = $0.indexOf('"')
    let endIndex = $0.indexOf('">')
    
    const href = `#${$0.slice(startIndex + 1, endIndex)}`
    const currentItem = {
      tag: $1, // 标签类型
      title,
      href,
      children: []
    }
    pushItem(list, currentItem)
  })
  return list
}

const Navigation = ({ content }) => {
  const list = getAnchorList(content)
  function renderLink({ href, title, children }) {
    return (
      <Link key={href} href={href} title={title}>
        {children.length > 0 && children.map(sub => renderLink(sub))}
      </Link>
    )
  }
  return <Anchor getContainer={()=>document.querySelector('.right-wrapper')} affix={true}>{list.map(renderLink)}</Anchor>
}

export default memo(Navigation)
