// 要素を取得
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// クリックイベントを登録
jokeBtn.addEventListener('click', generateJoke)

// ジョークを作成
generateJoke()

// 非同期処理であることを示すasyncを関数宣言の前につける
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  // fetchでAPIを叩く
  // promiseが返却されるまでまつ
  const res = await fetch('https://icanhazdadjoke.com', config)
  // resにデータが格納されるまで待つ
  const data = await res.json()
  // ページ上に取得データを表示する
  jokeEl.innerHTML = data.joke
}