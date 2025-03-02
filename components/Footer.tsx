import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="flex flex-col items-center space-y-4 pt-8 border-t border-gray-800">
      <div className="flex gap-4">
        <FiMail size="24" />
        <p>muhzuha@gmail.com</p>
      </div>
    </div>
  );
}
