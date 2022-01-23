import { FC } from "react";

interface Props {
	title?: string;
}

const IconButton: FC<Props> = ({ children, title }) => (
	<button className="h-8 w-8 rounded flex hover:bg-gray-700" title={title}>
		<div className="h-6 w-6 m-auto text-indigo-400">{children}</div>
	</button>
);

export default IconButton;
