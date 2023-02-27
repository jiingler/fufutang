const Service: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="expertise bg-wood h-100">
        <h3 className="title">{service?.title}</h3>
        {service.description &&
          service.description.map((description, idx) => (
            <p className="description" key={idx}>
              {description}
            </p>
          ))}
        {service?.indications && (
          <>
            <h4 className="subtitle">適應症：</h4>
            {service?.indications?.map((indication, idx) => (
              <p className="description" key={idx}>
                {indication}
              </p>
            ))}
          </>
        )}
        {service?.applicables && (
          <>
            <h4 className="subtitle">靈氣療癒的適用範圍：</h4>
            {service?.applicables?.map((applicable, idx) => (
              <p className="description" key={idx}>
                {applicable}
              </p>
            ))}
          </>
        )}
        {service?.processes && (
          <>
            <h4 className="subtitle">靈氣療癒過程：</h4>
            {service?.processes?.map((process, idx) => (
              <p className="description" key={idx}>
                {process}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Service;
