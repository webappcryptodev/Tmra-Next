interface TemplateData {
  name: string;
  fontFace: string;
  fontStyle: string;
  fontSize: string;
  color: string;
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  direction: string;
  locale: string;
}

const TemplateConfig: TemplateData[] = [
  {
    name: 'Template 1',
    fontFace: 'Roboto',
    fontStyle: 'normal',
    fontSize: '23px',
    color: '#fff',
    x1: '50%',
    y1: '50%',
    x2: '50%',
    y2: '50%',
    direction: 'ltr',
    locale: 'en-US',
  },
  {
    name: 'Template 2',
    fontFace: 'sans-serif',
    fontStyle: 'oblique',
    fontSize: '20px',
    color: '#fff',
    x1: '50%',
    y1: '30%',
    x2: '60%',
    y2: '50%',
    direction: 'ltr',
    locale: 'en-US',
  },
  {
    name: 'Template 3',
    fontFace: 'Times New Roman',
    fontStyle: 'italic',
    fontSize: '26px',
    color: '#fff',
    x1: '45%',
    y1: '20%',
    x2: '55%',
    y2: '80%',
    direction: 'rtl',
    locale: 'ar-SA',
  },
];

export default TemplateConfig;
