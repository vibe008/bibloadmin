import React from "react";
import Button from "../ui/button/Button";
interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  editbtn?: Boolean;
  // setEditable?:React.SetStateAction(true);
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  editbtn,
  // setEditable
}) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
    >
      {/* Card Header */}
      <div className="px-6 py-5 flex justify-between">
        <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
          {title}
        </h3>

        {/* {editbtn &&         
        <Button size="md" variant="primary" >
          Edit
        </Button>
          
          } */}

      </div>

      {/* Card Body */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
