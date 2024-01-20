import React, { useEffect } from "react";
import { Graph } from "@antv/x6";
import "./Home.less";
import { Snapline } from "@antv/x6-plugin-snapline";
const data = {
  nodes: [
    {
      id: "node1",
      shape: "rect",
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: "hello",
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
          fill: "#fff",
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: "node2",
      shape: "rect",
      x: 160,
      y: 180,
      width: 100,
      height: 40,
      label: "world",
      attrs: {
        body: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
          fill: "#fff",
          rx: 6,
          ry: 6,
        },
      },
    },
  ],
  edges: [
    {
      shape: "edge",
      source: "node1",
      target: "node2",
      label: "x6",
      attrs: {
        // line 是选择器名称，选中的边的 path 元素
        line: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
        },
      },
    },
  ],
};
let graph;
const Home: React.FC = () => {
  useEffect(() => {
    init();
  });

  return (
    <>
      <div className="Graph-app" style={{ width: "100%", height: "100%" }}>
        <div className="app-content" id="graph-container"></div>
      </div>
    </>
  );
};
function init() {
  graph = new Graph({
    container: document.getElementById("graph-container") as HTMLElement,
    // 设置画布背景颜色
    background: {
      color: "#F2F7FA",
    },
    autoResize: true,
    grid: {
      visible: true,
      type: "doubleMesh",
      args: [
        {
          color: "#eee", // 主网格线颜色
          thickness: 1, // 主网格线宽度
        },
        {
          color: "#ddd", // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4, // 主次网格线间隔
        },
      ],
    },
    panning: true,
    mousewheel: true,
  });
  graph.use(
    new Snapline({
      enabled: true,
    })
  );
  graph.fromJSON(data);
}
export default Home;
