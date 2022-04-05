import React, { useMemo, useRef, useState } from "react";
import BlankImage from "@assets/image/ts.png";
import { FileInput, FileUploadButton, FileUploadContainer, FileUploadForm, ShowFileImage } from "./styled";

type UploadImage = {
	file: File;
	thumbnail: string;
	type: string;
};
const FileUpLoad = () => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [imageFile, setImageFile] = useState<UploadImage | null>(null);
	const handleClickFileInput = () => {
		fileInputRef.current?.click();
	};

	const uploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fileList = e.target.files;
		const length = fileList?.length;
		if (fileList && fileList[0]) {
			const url = URL.createObjectURL(fileList[0]);

			setImageFile({
				file: fileList[0],
				thumbnail: url,
				type: fileList[0].type.slice(0, 5),
			});
		}
	};

	const showImage = useMemo(() => {
		if (!imageFile && imageFile == null) {
			return <img src={BlankImage} alt="비어있는 프로필 " />;
		}
		return <ShowFileImage src={imageFile.thumbnail} alt={imageFile.type} onClick={handleClickFileInput} />;
	}, [imageFile]);
	return (
		<FileUploadContainer>
			{showImage}
			<h2>파일 업로드</h2>
			<FileUploadForm>
				<FileInput type="file" accept="image/jpg, image/jpeg, image/png" ref={fileInputRef} onChange={uploadProfile} />
				<FileUploadButton type="button" onClick={handleClickFileInput}>
					파일 업로드 버튼
				</FileUploadButton>
			</FileUploadForm>
			<ShowFileImage />
		</FileUploadContainer>
	);
};

export default FileUpLoad;
