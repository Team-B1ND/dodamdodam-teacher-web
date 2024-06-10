class TextTransform {
  public splitText(text: string): [string, string] | string {
    const firstConlonIndex = text.indexOf(":");
    const secondPart = text.substring(firstConlonIndex + 1);
    const secondColonIndex = secondPart.indexOf(":");

    if (secondColonIndex === -1) {
      const handleReason = text.split(":")[0];
      return handleReason;
    }

    const actualSecondColonIndex = firstConlonIndex + 1 + secondColonIndex;

    const firstPart = text.substring(0, actualSecondColonIndex);
    const secondPartAfterColon = text.substring(actualSecondColonIndex + 1);

    return [firstPart, secondPartAfterColon][0];
  }
}

const textTransform = new TextTransform();
export default textTransform;
