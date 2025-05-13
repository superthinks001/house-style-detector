import { UploadIcon, ButtonCheckIcon, ButtonCrossIcon } from "../components/Icons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Icon Test</h1>
      <div className="flex gap-4">
        <UploadIcon className="w-12 h-12" />
        <ButtonCheckIcon className="w-12 h-12" />
        <ButtonCrossIcon className="w-12 h-12" />
      </div>
    </div>
  );
}