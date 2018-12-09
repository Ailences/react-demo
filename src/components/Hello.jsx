import React from 'react'

export default function Hello(props) {
    console.log(props);
    return <div>这是Hello组件 {props.name} --- {props.age} --- {props.gender}</div>
}
