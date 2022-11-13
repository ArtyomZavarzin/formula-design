import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { servicesModel } from '../../models/services';
import { useCallback, useState } from 'react';
import { ServicePage } from './ServicePage';
import { ServiceSendModal } from './ServiceSendModal';

const Wrapper = styled.div`
  margin-left: -26px;
  margin-right: -26px;
`;

const SendButton = styled.button`
  margin-top: 25px;
  margin-bottom: 25px;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  /* background: linear-gradient(90deg, #ef4141 0%, #c241ef 52.08%, #6b41ef 100%); */
  background: ${({ colors }) => {
    if (colors.length > 1) {
      let step = 100 / (colors.length - 1);
      return (
        'linear-gradient(90deg,' +
        colors.map((color, index) => ` ${color} ${step * index}%`) +
        ')'
      );
    } else {
      return colors[0];
    }
  }};
  border-radius: 77px;
  font-family: 'Ultramono Wide Black';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 42px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  border: 1px solid #1d1e1c;

  transition: all 0.3s;

  &:disabled {
    opacity: 0.5;
    border-color: #ffffff;
    background: inherit;
  }
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
        colors={selectedList.map((el) => el.color)}
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
