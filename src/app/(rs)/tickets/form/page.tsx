import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";

import * as Sentry from "@sentry/nextjs";

const TicketFormPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  try {
    const { customerId, ticketId } = await searchParams;

    // edit mode
    if (!customerId && !ticketId) {
      return (
        <>
          <h2>Customer ID #{customerId} or Customer Id required to load ticket form</h2>
          <BackButton title="Go Back" variant="default" />
        </>
      );
    }

    // new ticket
    if(customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <>
            <h2>Customer ID #{customerId} not found</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      if(!customer.active) {
        return (
          <>
            <h2>Customer ID #{customerId} is not active</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }

      console.log("customer", customer);

    }

    // edit ticket
    if(ticketId) {
      const ticket = await getTicket(parseInt(ticketId));
      if (!ticket) {
        return (
          <>
            <h2>Ticket ID #{ticketId} not found</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      console.log("ticket", ticket);
      const customer = await getCustomer(ticket.customerId);

      // return ticket form here
      console.log("ticket", ticket);
      console.log("customer", customer);

    }

  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }

};

export default TicketFormPage;