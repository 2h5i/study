import React from 'react';
import { RouteLeavingGuard } from './RouteLeavingGuard';

const index = () => {
  return (
    <RouteLeavingGuard
          modalProps={{
            okText: '확인',
            cancelText: '취소',
          }}
          shouldBlockNavigation={(nextLocation) => {
            if (nextLocation.pathname === '다음 pathName') {
              return true;
            }
            return false;
          }}
        >
          <div style={{ textAlign: 'center' }}>
            저장하지 않은 내용은 사라집니다. <br />
            페이지를 벗어나시겠습니까?
          </div>
        </RouteLeavingGuard>
  );
};

export default index;