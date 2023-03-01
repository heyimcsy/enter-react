function Child() {
  return (
    <button
      onClick={() => {
        alert('나는 child.jsx에서 왔습니다! 그런데 import 빼줬어잉~❤️')
      }}
    >
      클릭!
    </button>
  )
}

export default Child
