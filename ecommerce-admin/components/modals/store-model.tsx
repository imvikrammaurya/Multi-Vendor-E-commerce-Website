"use client";

import { useStoreModal } from "@/hooks/use-store-model";
import { Modal } from "@/components/ui/model";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
  <Modal title="Create SStore" description="Add a new store to manage products and categories" isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
    Future Create Store Form
  </Modal>
    );
}