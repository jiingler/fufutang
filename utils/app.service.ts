export class AppService {
  baseUrl = process.env.NEXT_PUBLIC_API_URL as string;

  public async get<T>(url: string, criteria: any = null): Promise<T> {
    let query = "";
    if (criteria) {
      Object.keys(criteria).forEach((key, index) => {
        const str = `${key}=${criteria[key]}`;
        query += str;
        if (index <= Object.keys(criteria).length - 1) {
          query += "&";
        }
      });
    }

    const response = await fetch(
      `${this.baseUrl}/${url}${criteria ? `?${query}` : ""}`
    );
    return await response.json();
  }

  public async post<T>(url: string, model: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: "POST",
      body: model,
    });
    return await response.json();
  }

  public async put<T>(url: string, model: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: "PUT",
      body: model,
    });
    return await response.json();
  }

  public async delete<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: "DELETE",
    });
    return await response.json();
  }
}
