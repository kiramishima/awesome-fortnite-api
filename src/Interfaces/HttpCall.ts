export interface HttpClient<T> {
    call: Promise<T>
}