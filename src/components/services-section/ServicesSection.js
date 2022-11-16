import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import styled, { css } from 'styled-components';
import { servicesModel } from '../../models/services';
import { useCallback, useState } from 'react';
import { ServicePage } from './ServicePage';
import { ServiceSendModal } from './ServiceSendModal';
import { SendButton } from '../styled-components/Buttons';

const Wrapper = styled.div`
  margin-left: -26px;
  margin-right: -26px;
`;

const StyledSwiper = styled(Swiper)`
  & .swiper-pagination {
    position: static;
    margin-top: 14px;
    & span {
      border: 1px solid #d9d9d9;
    }
  }
`;

export const ServicesSection = () => {
  const [selectedList, setSelectedList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onServiceClick = useCallback(
    (service) => {
      if (selectedList.some((el) => el.id === service.id)) {
        setSelectedList(selectedList.filter((el) => el.id !== service.id));
      } else {
        setSelectedList([...selectedList, service]);
      }
    },
    [selectedList]
  );

  return (
    <>
      <Wrapper>
        <StyledSwiper
          style={{
            '--swiper-pagination-color': '#D9D9D9',
            '--swiper-pagination-bullet-height': '14px',
            '--swiper-pagination-bullet-width': '14px',
            '--swiper-pagination-bullet-horizontal-gap': '3px',
            '--swiper-pagination-bullet-inactive-color': 'transparent',
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <ServicePage
              title='дизайн'
              services={servicesModel.filter((ser) => ser.page === 0)}
              onServiceClick={onServiceClick}
              selectedList={selectedList}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServicePage
              title='разработка'
              services={servicesModel.filter((ser) => ser.page === 1)}
              onServiceClick={onServiceClick}
              selectedList={selectedList}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServicePage
              title={
                <>
                  я что-то хочу,
                  <br />
                  &nbsp;&nbsp; но не знаю что,
                  <br />
                  &nbsp;помогите
                </>
              }
              services={servicesModel.filter((ser) => ser.page === 2)}
              onServiceClick={onServiceClick}
              selectedList={selectedList}
            />
          </SwiperSlide>
        </StyledSwiper>
      </Wrapper>
      <SendButton
        onClick={() => setIsOpen(true)}
        disabled={selectedList.length === 0}
        colors={selectedList.reduce(
          (arr, el) =>
            el.isGradient ? [...arr, ...el.color] : [...arr, el.color],
          []
        )}
        marginStyles={css`
          margin-top: 14px;
        `}
      >
        Отправить
      </SendButton>

      <ServiceSendModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedList={selectedList}
      />
    </>
  );
};
