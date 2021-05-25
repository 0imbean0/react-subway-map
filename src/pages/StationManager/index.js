import React from 'react';
import { PageTemplate, Input, Button, ManagementList } from '../../components';
import { ROUTE, SIZE, COLOR } from '../../constants';
import useStationManager from '../../hooks/useStationManager';
import { Form, InputWrapper, ButtonWrapper } from './style';

const StationManager = () => {
  const { stations } = useStationManager();

  return (
    <PageTemplate title={ROUTE.STATION_MANAGE.NAME}>
      <Form>
        <InputWrapper>
          <Input
            type="text"
            name="station-add"
            label="지하철 역 이름을 입력해주세요."
            placeholder="🚇 지하철 역 이름을 입력해주세요."
            size={SIZE.MD}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button backgroundColor={COLOR.AMBER}>추가</Button>
        </ButtonWrapper>
      </Form>
      {stations && <ManagementList items={stations} />}
    </PageTemplate>
  );
};

export default StationManager;
