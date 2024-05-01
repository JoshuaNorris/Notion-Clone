import { NodeData } from "../utils/types"
import styles from ".Title.module.css"

type TitleProps = {
	title: string;
	changePageTitle(title: string): void;
	addNode(node: NodeData, index: number);
}

export const Title = ({title, changePageTitle, addNode}: TitleProps) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}
				contentEditable
				suppressContentEditableWarning
				onKeyDown = {(event) => {
					if (event.key === 'Enter') {
						event.preventDefault();
						addNode({type: "text", id: 0, value: ""}, 0)
					}
				}}
			/>
		</div>
	)
}