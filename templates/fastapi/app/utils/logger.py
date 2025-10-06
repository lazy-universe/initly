# app/utils/logger.py
import logging


def get_logger(name: str = "app"):
    logger = logging.getLogger(name)
    if not logger.hasHandlers():
        handler = logging.StreamHandler()
        # you can add time too in this custom formatter : %(asctime)s
        formatter = logging.Formatter(
            "      %(levelname)s   %(module)s: %(message)s"
        )
        handler.setFormatter(formatter)
        logger.addHandler(handler)

    logger.setLevel(logging.INFO)
    return logger
