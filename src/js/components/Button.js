export default function Button({style, type, children, onClick = null, title=null}){
    return (<button type={type} style={style} onClick={onClick} title={title}>
        {children}
    </button>)
}