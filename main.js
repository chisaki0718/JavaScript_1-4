//定数
const title = '========================\n現在持っているタスクの一覧\n========================';

const tasks = [
  {
    name: '机を片付ける',
    genre: '掃除'
  },
  {
    name: '牛乳を買う',
    genre: '買い物'
  },
  {
    name: '散歩する',
    genre: '運動'
  }
];

// タスクリスト用関数
const showTasksList = tasks => {
  tasks.forEach((task, index) => {
    console.log(`${index}：[内容]${task.name}、[ジャンル]${task.genre}`)
  });
};

//最初の段階でコンソールにタスク一覧が表示されている
console.log(title);
showTasksList(tasks);

//「タスクとジャンルを入力する欄がある」の定数
const taskName = prompt('タスクを入力してください');
const genre = prompt('ジャンルを入力してください');
const task = { name: taskName, genre };

//タスクの内容を入力するとタスクが追加され、一覧表示される
const addTask = task => {
  console.log(title);
  tasks.push(task);
  showTasksList(tasks);
  window.alert('新しいタスクを追加しました。');
};
addTask(task);

//追加後の処理
const select = window.prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');