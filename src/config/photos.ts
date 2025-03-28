import { StaticImageData } from 'next/image';

// 集中导入所有照片
import Qvb from '../../public/photos/DSC_1731.jpg';
import Love from '../../public/photos/DSC_2409.jpg';
import Park from '../../public/photos/DSC_2415.jpg';
import View from '../../public/photos/DSC_2357.jpg';
import Kid from '../../public/photos/DSC_2246.jpg';
import Bike from '../../public/photos/DSC_1855.jpg';

// 定义照片类型
export interface Photo {
  id: number;
  src: StaticImageData;
  title: string;
  description?: string;
}

// 导出照片数组
export const photos: Photo[] = [
  { id: 1, src: Qvb, title: 'Qvb' },
  { id: 2, src: Love, title: 'Love' },
  { id: 3, src: Park, title: 'Park' },
  { id: 4, src: View, title: 'View' },
  { id: 5, src: Kid, title: 'Kid' },
  { id: 6, src: Bike, title: 'Bike' }
];