import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { IoMdDownload } from "react-icons/io";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const ImportFile = () => (
  <>
    <Dragger {...props} accept=".xls, .xlsx">
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Chọn mẫu file phù hợp để gửi yêu cầu</p>
      {/* <div className="mx-auto w-fit flex ant-upload-text items-center">
      <IoMdDownload className="text-blue-600"/>
      File mẫu
    </div> */}
      <p className="ant-upload-hint">Kéo thả hoặc tải danh sách lên ( XLSX )</p>
    </Dragger>
    <div className="mx-auto w-fit flex ant-upload-text items-center">
      <IoMdDownload className="text-blue-600" />
      File mẫu
    </div>
  </>
);
export default ImportFile;
