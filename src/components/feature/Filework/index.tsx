import useInput from "@hooks/useInput";
import React, { useState } from "react";

type Props = {
	setIsEdited: React.Dispatch<React.SetStateAction<boolean>>;
};

const FileupLoadForm = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [title, setTitle] = useInput("");
	const [description, setDescription] = useState("");
	return <></>;
};

export default FileupLoadForm;
