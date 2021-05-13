import React from 'react';
import { Button } from '../src/components/commons/Button';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Modal from '../src/components/commons/Modal';
import { Box } from '../src/components/foundation/layout/Box';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Text } from '../src/components/foundation/Text';
import FormCadastro from '../src/components/patterns/FormCadastro';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <>
      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        backgroundImage="url(/images/bubbles.svg)"
        backgroundRepeat="no-repeat"
        backgroundPosition={{
          xs: 'center right',
          md: 'bottom right',
        }}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>

        <Menu />

        <Grid.Container
          marginTop={{
            xs: '32px',
            md: '75px',
          }}
        >
          <Grid.Row>
            <Grid.Col
              offset={{
                xs: 0,
                md: 1,
              }}
              value={{
                xs: 12,
                md: 5,
              }}
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="column"
            >
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
                margin={{
                  xs: '0px',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
                margin={{
                  xs: '12px 0 0 0',
                  md: '16px 0 0 0',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s.
              </Text>

              <Button
                variant="primary.main"
                display="block"
                margin={{
                  xs: '24px auto 40px auto',
                  md: '40px 0px 0px 0px',
                }}
                onClick={() => {
                  setModalState(!isModalOpen);
                }}
              >
                Cadastrar
              </Button>
            </Grid.Col>
            <Grid.Col
              value={{
                xs: 12,
                md: 6,
              }}
            >
              <img
                alt="Imagem de celular ilustrando as telas do projeto."
                style={{ display: 'block', margin: 'auto' }}
                src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>

        <Footer />
      </Box>
    </>
  );
}
