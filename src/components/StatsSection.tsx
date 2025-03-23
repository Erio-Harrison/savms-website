export default function StatsSection() {
    const stats = [
      { value: '98%', label: 'Fault Prediction Rate' },
      { value: '25%', label: 'Battery Life Improvement' },
      { value: '45%', label: 'Maintenance Cost Reduction' },
      { value: '30%', label: 'Energy Efficiency Improvement' }
    ];
  
    return (
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }