type MapIframeProps = {
  width: number;
  height: number;
};
export const MapIframe = ({ width, height }: MapIframeProps) => (
  <iframe
    title="Localização da escola"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442545.88328442804!2d-51.31121246392472!3d-29.939467052027947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973ff91426373%3A0x49750842fa8280f9!2sCMEC%20College%20Santa%20Luzia!5e0!3m2!1sen!2sbr!4v1726445013707!5m2!1sen!2sbr"
    width={width}
    height={height}
    style={{ border: "0" }}
    allowFullScreen={false}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);
