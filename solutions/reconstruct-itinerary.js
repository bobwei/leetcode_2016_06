/* eslint-disable no-param-reassign, max-len, arrow-body-style */
const findItinerary = (tickets, debug) => {
  const graph = tickets.reduce((s, v) => {
    const [key, value] = v;
    if (!s[key]) {
      s[key] = [];
    }
    s[key].push(value);
    return s;
  }, {});
  Object
    .keys(graph)
    .forEach((key) => {
      graph[key].sort();
    });
  if (debug) {
    console.log(JSON.stringify(graph, null, 2));
  }
  const start = 'JFK';
  const stack = [start];
  const routes = [];
  let last;
  while (stack.length) {
    const current = stack.pop();
    if (graph[current]) {
      const n = graph[current].length;
      for (let i = 0; i < n; i++) {
        stack.push(graph[current].pop());
      }
      console.log(stack);
      routes.push(current);
    } else {
      last = current;
    }
  }
  if (last) {
    routes.push(last);
  }
  return routes;
};

console.log(findItinerary(JSON.parse('[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]'), true));
console.log(findItinerary(JSON.parse('[["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]'), true));
console.log(findItinerary(JSON.parse('[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]'), true));
console.log(findItinerary(JSON.parse('[["EZE","AXA"],["TIA","ANU"],["ANU","JFK"],["JFK","ANU"],["ANU","EZE"],["TIA","ANU"],["AXA","TIA"],["TIA","JFK"],["ANU","TIA"],["JFK","TIA"]]'), true));
