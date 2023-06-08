import stylesLoader from './loader.module.css'

export default function Loader() {
  const circles = []
  for (let i = 1; i < 21; i++) {
    const styles = { '--i': i }
    circles.push(
      <span key={i} style={styles} className={stylesLoader.span}></span>
    )
  }
  return (
    <div className={stylesLoader.container}>
      <div className={stylesLoader.loader}>{circles}</div>
    </div>
  )
}
