import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';
import { AiOutlineLeft } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { conditionProp } = props;
  const Navigate = useNavigate();

  return (
    <header>
      {conditionProp ? (
        <>
          <h1>COVID METRICS</h1>
          <div className="right">
            <FiSettings className="settings" />
          </div>
        </>
      ) : (
        <>
          <AiOutlineLeft
            className="navigateBack"
            onClick={() => Navigate('/')}
          />
          <div className="right">
            <MdKeyboardVoice className="voiceIcon" />
            <FiSettings className="settings" />
          </div>
        </>
      )}
    </header>
  );
};

Header.defaultProps = {
  conditionProp: true,
};

Header.propTypes = {
  conditionProp: PropTypes.bool,
};

export default Header;
