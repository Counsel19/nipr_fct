import { CloudUpload } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { FC } from "react";
import { AppDispatch } from "@/lib/redux/store";
import { toast } from "../ui/use-toast";


interface FileUploadProps {}

const FileUpload: FC<FileUploadProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const postData = new FormData();
      postData.append("name", acceptedFiles[0].name);

      postData.append("file", acceptedFiles[0]);

      //   await dispatch(uploadFile(postData));

      return toast({
        title: "File Uploaded successfully",
        variant: "success",
      });
    },
    [dispatch]
  );

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({ onDrop });
  return (
    <div className=" rounded-lg text-base  w-full">
      <div
        {...getRootProps()}
        className="border border-1  w-full border-gray-300 rounded-lg p-6 text-center mb-8"
      >
        <div className=" mb-8 space-y-8 flex flex-col items-center">
          <div className="p-6 rounded-full bg-slate-200 w-fit ">
            <CloudUpload />
          </div>
          <div className="font-normal text-base">
            <input {...getInputProps()} accept=".csv" />
            {isDragActive ? (
              <p className="font-semibold ">Drop Files Here...</p>
            ) : acceptedFiles.length === 0 ? (
              <>
                <p>
                  <span className="font-semibold ">Click to upload</span> or
                  drag and drop
                </p>
                <p className="text-[1.2rem] font-normal text-gray-400">
                  CSV file
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold ">Uploading Files...</p>
                <p className="text-[1.2rem] font-normal text-gray-400">
                  CSV file
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
