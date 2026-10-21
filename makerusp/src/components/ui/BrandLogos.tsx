import inovaColorida from '../../assets/logos/inovausp-colorido.png';
import inovaBranca from '../../assets/logos/inovausp-branco.png';
import makerLogo from '../../assets/logos/makerusp-transparente.png';

type Props = {
  variant?: 'header' | 'footer';
};

export default function BrandLogos({ variant = 'header' }: Props) {
  return (
    <div className={`brand-logos brand-logos--${variant}`} aria-label="InovaUSP e MakerUSP">
      <img
        src={variant === 'footer' ? inovaBranca : inovaColorida}
        alt="InovaUSP — Centro de Inovação da Universidade de São Paulo"
        className="brand-logos__inova"
      />
      {variant === 'header' && <span className="brand-logos__divider" aria-hidden="true" />}
      {variant === 'header' && (
        <img
          src={makerLogo}
          alt="MakerUSP — USP Makerspace"
          className="brand-logos__maker"
        />
      )}
    </div>
  );
}
