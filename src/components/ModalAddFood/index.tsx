import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import Modal from '../Modal';
import { FoodProps } from '../../pages/Dashboard';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Input } from '../Input';

interface ModalAddProps {
  setIsOpen: () => void;
  handleAddFood: (data: FoodProps) => void;
  isOpen: boolean;
}

export function ModalAddFood({ handleAddFood, isOpen, setIsOpen }: ModalAddProps) {
  const formRef = createRef<FormHandles>()

  const handleSubmit = async (data: FoodProps) => {
    handleAddFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }

export default ModalAddFood;
