import { Calendar, Eye } from 'lucide-react';
import { formatDate } from '../../utility/dateFormates';
interface DateViewsProps {
  data: { createdAt: string; views: number }; // Adjust the type according to your actual data structure
  className?: string;
}

const DateViews: React.FC<DateViewsProps> = ({ data, className = '' }) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <div className="flex items-center gap-2 capitalize">
        <Calendar className="text-primary-headingColor w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6" />
        <span className="text-xs font-bold lg:text-sm">
          {formatDate(data?.createdAt)}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Eye className="text-primary-headingColor w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6" />
        <span className="text-xs font-bold capitalize lg:text-sm">
          {data?.views}
        </span>
      </div>
    </div>
  );
};

export default DateViews;
