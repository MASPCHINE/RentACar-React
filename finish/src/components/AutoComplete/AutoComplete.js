import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import LocationIcon from "../../Icon/LocationIcon/LocationIcon"
import style from "./AutoComplete.module.scss";


export const AutoComplete = (props) => {
  return (
    <div  className={style.autoComplete}>
    <LocationIcon/>
    <div className={style.autoComplete__info}>
        <span className={style.option}>{props.locationText}</span>
        <GooglePlacesAutocomplete className={style.autoComplete__input}/>
    </div>
  </div>
  )
}
export default AutoComplete;
