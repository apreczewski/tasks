import React, { useState, useCallback, useRef } from 'react';

import { VscClose } from 'react-icons/vsc'
import moment from 'moment-timezone';
import { v4 as uuid } from 'uuid';

import { colors } from '../../styles/colors';
import { Header } from '../../components/anothers/Header';
import { Footer } from '../../components/anothers/Footer';

import { ButtonDefault } from '../../components/buttons/ButtonDefault';
import { ICard } from '../../components/cards/CardDefault/index';

import { CardDefault } from '../../components/cards/CardDefault';
import { ModalDefault } from '../../components/modals/ModalDefault';
import { InputDefault } from '../../components/inputs/InputDefault';
import { InputTextArea } from '../../components/inputs/InputTextArea';

import {
  Wrapper,
  Buttons,
  Body,
  Anchor,
  NoTask,
  ContentModal,
  FormCustom,
  BntClose
} from './styles';



export const Home: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>([])
  const [isOpenModal, setIsOpenModal] = useState(false)

  const formRef = useRef(null);

  const handleOpenModal = useCallback((status) => {
    if (status) {
      setIsOpenModal(true);
      return;
    }
    setIsOpenModal(false);
  }, [])

  const handleAddNewCard = useCallback((card) => {
    if (card) {
      setCards([...cards, { ...card, id: uuid(), created: `Created ${moment(new Date()).format('MMMM DD, YYYY HH:mma')}` }])
      handleOpenModal(false);
    }

  }, [cards, handleOpenModal])

  return (
    <Wrapper>
      <Header openModal={() => handleOpenModal(!isOpenModal)} />
      <Body>
        <Anchor>
          <h1>Hi there.</h1>
          <Buttons>
            <ButtonDefault id="btn_todo" color={colors.gunPowder}>
              <span>To do</span>
            </ButtonDefault>
            <ButtonDefault id="btn_closed" color={colors.shark}>
              <span>Closed</span>
            </ButtonDefault>
          </Buttons>
        </Anchor>

        {cards && cards.map((card) => {
          return <CardDefault key={uuid()} title={card.title} text={card.text} created={card.created} />
        })}

        {!cards.length && (
          <NoTask>No Tasks</NoTask>
        )}

        {isOpenModal && (
          <ModalDefault
            isOpen={isOpenModal}
            handleClose={() => handleOpenModal(!isOpenModal)}

          >
            <ContentModal>
              <span>New Task</span>
              <BntClose type='button' onClick={() => handleOpenModal(!isOpenModal)}>
                <VscClose size={18} />
              </BntClose>

              <FormCustom
                ref={formRef}
                id="formCustom"
                onSubmit={handleAddNewCard}
              >
                <InputDefault name="title" placeholder="Title" width="100%" />
                <InputTextArea name="text" placeholder="Title" width="100%" id="textArea" />
                <ButtonDefault radius={20} width="100%" type="submit">Save</ButtonDefault>
              </FormCustom>
            </ContentModal>
          </ModalDefault>
        )}
      </Body>
      <Footer />
    </Wrapper>
  );
}
