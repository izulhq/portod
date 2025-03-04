import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="flex flex-col items-center space-y-4 py-6 border-t border-[#e5e5e5]">
      <div className="flex gap-2">
        <FiMail size="24" color="gray" />
        <p className="text-gray-600">muhzuha@gmail.com</p>
      </div>
    </div>
  );
}
