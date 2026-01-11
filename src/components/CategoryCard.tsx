import { ExternalLink, ArrowRight } from 'lucide-react';

interface Resource {
  name: string;
  url: string;
  description?: string;
}

interface CategoryCardProps {
  category: {
    title: string;
    resources: Resource[];
    comingSoon?: boolean;
  };
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-[#5F4DED] hover:shadow-lg transition-all duration-300">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5F4DED]/0 to-[#7B68EE]/0 group-hover:from-[#5F4DED]/5 group-hover:to-[#7B68EE]/5 rounded-xl transition-opacity" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg text-gray-900 group-hover:text-[#5F4DED] transition-colors">
            {category.title}
          </h3>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#5F4DED] group-hover:translate-x-1 transition-all" />
        </div>

        {category.comingSoon ? (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm border border-gray-200">
            Coming soon
          </div>
        ) : category.resources.length === 0 ? (
          <p className="text-gray-500 text-sm">No resources yet</p>
        ) : (
          <ul className="space-y-3">
            {category.resources.slice(0, 3).map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-start gap-2 text-gray-700 hover:text-[#5F4DED] transition-colors"
                >
                  <span className="flex-1 text-sm">{resource.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 mt-0.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
                {resource.description && (
                  <p className="text-xs text-gray-500 mt-1 ml-0">
                    {resource.description}
                  </p>
                )}
              </li>
            ))}
            {category.resources.length > 3 && (
              <li className="text-sm text-[#FF1F8F] pt-1">
                +{category.resources.length - 3} more
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
