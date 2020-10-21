import React, { useEffect, useState } from 'react';
import { Prompt, useHistory } from 'react-router-dom';
import { Modal } from 'antd';

interface IRouteLeavingGuard {
  shouldBlockNavigation?: (nextLocation: {[key:string]:string}) => void;
  children?: any;
  modalProps?: any;
  customPath?: string;
}

export const RouteLeavingGuard: React.FC<IRouteLeavingGuard> = (props) => {
  const { shouldBlockNavigation, children, modalProps, customPath } = props;
  const history = useHistory();
  const [modalVisible, updateModalVisible] = useState(false);
  const [lastLocation, updateLastLocation] = useState<
  {[key:string]:string}>();
  const [confirmedNavigation, updateConfirmedNavigation] = useState(false);

  const showModal = (location:{[key:string]:string}) => {
    updateModalVisible(true);
    updateLastLocation(location);
  };

  const closeModal = (e: any, cb: () => void) => {
    updateModalVisible(false);
    if (modalProps.onCancel) {
      modalProps.onCancel();
    }
    if (cb) {
      cb();
    }
  };

  const handleBlockedNavigation = (nextLocation:any) => {
    //nextLocation type 우선 any로.. 나중에 다시 타입 맞추기
    if (
      !confirmedNavigation &&
      (!shouldBlockNavigation || shouldBlockNavigation(nextLocation))
    ) {
      showModal(nextLocation);
      return false;
    }
    return true;
  };
  const handleConfirmNavigationClick = () => {
    closeModal(null, () => {
      if (lastLocation) {
        updateConfirmedNavigation(true);
      }
    });
  };

  useEffect(() => {
    if (confirmedNavigation && lastLocation && lastLocation.pathname) {
      history.replace(customPath || lastLocation.pathname);
      updateConfirmedNavigation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmedNavigation, lastLocation, history]);

  return (
    <>
      <Prompt when={true} message={handleBlockedNavigation} />
      <Modal
        wrapClassName="cp-modal no-close"
        {...modalProps}
        maskClosable={false}
        visible={modalVisible}
        onCancel={closeModal}
        onOk={() => {
          handleConfirmNavigationClick();
        }}
        afterClose={() => {
          document.body.style.removeProperty('overflow');
        }}
      >
        {children}
      </Modal>
    </>
  );
};

export default RouteLeavingGuard;
