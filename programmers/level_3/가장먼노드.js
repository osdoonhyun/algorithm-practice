//아이디어
// DFS처럼 checkbox를 만들고 한번 지나간 노드는 다시 돌아오지 못하게 만든다.
// 가장 긴 노드를 찾아 return 한다.

function solution(n, edge) {
  var answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let visited = Array.from({ length: n + 1 }, () => 0);
  let queue = [];
  for (const [a, b] of edge) {
    graph[a][b] = 1;
  }

  queue.push(1);
  visited[1] = 1;
  console.log('graph', graph);
  while (queue.length) {
    const cur = queue.shift();

    for (let i = 1; i <= n; )
      for (const next of graph[cur]) {
        console.log('next', next);
        if (!visited[next]) {
          visited[next] = visited[cur] + 1;
          queue.push(next);
        }
      }
  }
  const max = Math.max(...visited);
  return visited.filter((ele) => ele === max).length;

  // function DFS(v) {
  //   if (v === n) {
  //     answer += 1;
  //     console.log('path', path);
  //   } else {
  //     for (let i = 1; i <= n; i++) {
  //       if (graph[v][i] === 1 && checkbox[i] === 0) {
  //         checkbox[i] = 1;
  //         path.push(i);
  //         DFS(i);
  //         checkbox[i] = 0;
  //         path.pop();
  //       }
  //     }
  //   }
  // }
}

const n = 6;
const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];
console.log(solution(n, vertex));
