// 要素を取得
const deviceEl = document.getElementById('device');
const sensorEl = document.getElementById('sensor');
const valueEl = document.getElementById('value');
const deviceBtn = document.getElementById('deviceBtn');

// クリックイベントを登録
deviceBtn.addEventListener('click', generateJoke);

// ジョークを作成
// generateJoke();

async function generateJoke() {
  const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    method: 'POST',
    mode: 'cors', // no-cors に変更
    body: JSON.stringify({"OperationType": "SCAN"})
  }
  // fetchでAPIを叩く
  // fetch('https://8r1b634mb8.execute-api.ap-northeast-1.amazonaws.com/APItest/dynamodbctrl', config)
    // .then((res) => res.json()) // Promseからレスポンスデータ => jsonを抜き取る
    // .then((data) => console.log(data)) // データを出力
    // .catch((err) => console.log(err)) // エラーの場合こちらに入る。APIのURLを適当なものにすると動作確認できる

  // awaitを使う場合
  const res = await fetch('https://8r1b634mb8.execute-api.ap-northeast-1.amazonaws.com/APItest/dynamodbctrl', config);
  const data = await res.json();
  // デバッグ用
  console.log(data);
  console.log(data.Count);
  var number = data.Count;
  // データ数までのランダムな数値を出力
  var random_number = Math.floor( Math.random() * number);
  // デバッグ用　乱数を出力する
  console.log(random_number);
  // DeviceIDと値を表示する
  deviceEl.innerHTML = "デバイスIDは" + data.Items[random_number].DeviceID + "です。";
  sensorEl.innerHTML = "センサーIDは" + data.Items[random_number].SensorID + "です。";
  valueEl.innerHTML = "値は" + data.Items[random_number].value + data.Items[random_number].unit + "です。";
}

