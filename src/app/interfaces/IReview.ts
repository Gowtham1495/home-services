export class IReview {
    serviceProviderId: number;
    serviceId: number;
    reviewContent: string;
    reviewerName: string;

    constructor(serviceProviderId: number, serviceId: number, reviewContent: string, reviewerName: string) {
        this.serviceProviderId = serviceProviderId;
        this.reviewContent = reviewContent;
        this.reviewerName = reviewerName;
        this.serviceId = serviceId;
    }
}
