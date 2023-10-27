import Slider from "react-slick";

type Props = {
  settings: Object;
  children: React.ReactNode;
};

const SliderCustom = (props: Props) => {
  return (
    <Slider className={`overflow-hidden block`} {...props.settings}>
      {props.children}
    </Slider>
  );
};

export default SliderCustom;
