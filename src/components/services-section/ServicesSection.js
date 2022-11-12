import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { servicesModel } from '../../models/services';
import { useCallback, useState } from 'react';
import { ServicePage } from './ServicePage';

const Wrapper = styled.div`
  margin-left: -26px;
  margin-right: -26px;
`;

const SendButton = styled.button`
  margin-top: 25px;
  margin-bottom: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  background: linear-gradient(90deg, #ef4141 0%, #c241ef 52.08%, #6b41ef 100%);
  border-radius: 77px;
  font-family: 'Ultramono Wide Black';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 42px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
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
  const [selectedList, setSelectedList] = useState(
    (() => {
      const list = {};
      servicesModel.forEach((el) => {
        list[el.id] = false;
      });
      return list;
    })()
  );

  const onServiceClick = useCallback(
    (id) => {
      setSelectedList({ ...selectedList, [id]: !selectedList[id] });
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
      <SendButton>Отправить</SendButton>
    </>
  );
};
