import { NodeData } from "../utils/types"
import styles from "./Node.module.css"
import { useRef } from "react"

type BasicNodeProps = {
    node: NodeData;
    updateFocusedIndex(index: number): void;
    isFocused: boolean;
    index: number;
    addNode(node: NodeData, index: number): void;
    removeNodeByIndex(index: number): void;
    changeNodeValue(index: number, value: string): void;
}

export const BasicNode = ({
    node,
    updateFocusedIndex,
    isFocused,
    index,
    addNode,
    removeNodeByIndex,
    changeNodeValue
}: BasicNodeProps) => {

}