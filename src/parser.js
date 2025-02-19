export const parseJson = (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Error al parsear JSON:', error.message);
      process.exit(1);
    }
  };
  