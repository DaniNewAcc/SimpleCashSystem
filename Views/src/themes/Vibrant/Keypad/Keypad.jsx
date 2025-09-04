import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import './Keypad.css';
import { useLongPress } from '@hooks/useLongPress';

const PRESET_KEYS = {
  numeric: ['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0'],
  alphabet: [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split('')
  ]
};

function Keypad({ keys = [], preset = null, onInput, onDelete, showDelete = true, onErase}) {
  const finalKeys = preset ? PRESET_KEYS[preset] : keys;

  const longPress = useLongPress(() => {
    onErase();
  },500);

  /*TODO FIXX range action of key buttons, it isn't sensitive on whole grid single box */
  return (
    <div className={`keypad ${preset}`}>
      
      {(preset === 'alphabet') &&( 
        finalKeys.map((rowLetters, rowIndex) => (
          <div key={rowIndex} className={`row row${rowIndex + 1}`}>
            {rowLetters.map((key) => (
              <button
                key={key}
                type="button"
                className={`keypad__key keypad__key-${preset}`}
                onTouchEnd={() => onInput?.(key)}
                aria-label={`Key ${key}`}>
              {key}
              </button>
          ))}
          </div>)))}

      {(preset === 'numeric') && (
        finalKeys.map(key => (
        <button
          key={key}
          aria-label={`Key ${key}`}
          type="button"
          className={`keypad__key keypad__key-${preset}`}
          onClick={() => onInput?.(key)}
        >
          {key}
        </button>
      ))
      )}
          
      {showDelete && (
        <button
          aria-label="Delete"
          type="button"
          className={`keypad__key keypad__key-${preset} keypad__key-delete`}
          {...longPress}
          onClick={onDelete}
          
        >
          <ArrowLeftIcon width={40} height={40} />
        </button>
      )}
      {preset == 'alphabet' && (
            <button 
              className="space-bar"
              type='button'
              onTouchEnd={() => onInput?.(' ')}>␣</button>)}
      
    </div>
  );
}

export default Keypad;
