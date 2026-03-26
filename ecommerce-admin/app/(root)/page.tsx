"use client";
import { Modal } from "@/components/ui/model";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal isOpen={true} onClose={() => {}} title="Test" description="Test">
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
